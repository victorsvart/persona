#!/usr/bin/env bash

# Setup script for Persona application
# This script automates the initial setup process

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Helper functions
print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

print_info() {
    echo -e "${BLUE}ℹ${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_header() {
    echo ""
    echo -e "${BLUE}═══════════════════════════════════════════════════${NC}"
    echo -e "${BLUE}  $1${NC}"
    echo -e "${BLUE}═══════════════════════════════════════════════════${NC}"
    echo ""
}

# Check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Main setup process
main() {
    print_header "Persona Application Setup"
    
    # 1. Check prerequisites
    print_info "Checking prerequisites..."
    
    if ! command_exists docker; then
        print_error "Docker is not installed. Please install Docker first."
        echo "Visit: https://docs.docker.com/get-docker/"
        exit 1
    fi
    print_success "Docker is installed"
    
    if ! command_exists pnpm; then
        print_error "pnpm is not installed. Please install pnpm first."
        echo "Run: npm install -g pnpm"
        exit 1
    fi
    print_success "pnpm is installed"
    
    # Check if Docker daemon is running
    if ! docker info >/dev/null 2>&1; then
        print_error "Docker daemon is not running. Please start Docker."
        exit 1
    fi
    print_success "Docker daemon is running"
    
    # 2. Check for .env file
    print_header "Environment Configuration"
    
    if [ ! -f .env ]; then
        print_warning ".env file not found"
        print_info "Creating a basic .env file..."
        cat > .env << 'EOF'
# Database
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/persona?schema=public"

# Add your other environment variables here
# OPENAI_API_KEY=your_openai_api_key_here
# NEXT_PUBLIC_APP_URL=http://localhost:3000
EOF
        print_success "Created .env file - Please update with your configuration"
        print_warning "You may need to add additional environment variables (e.g., OPENAI_API_KEY)"
    else
        print_success ".env file exists"
    fi
    
    # 3. Install dependencies
    print_header "Installing Dependencies"
    print_info "Running: pnpm install"
    pnpm install
    print_success "Dependencies installed"
    
    # 4. Start Docker containers
    print_header "Starting Docker Containers"
    print_info "Starting PostgreSQL and Adminer..."
    pnpm run docker:up
    print_success "Docker containers started"
    
    # 5. Wait for database to be ready
    print_info "Waiting for database to be ready..."
    sleep 5
    
    max_attempts=30
    attempt=0
    until docker exec $(docker ps -q -f name=persona-db) pg_isready -U postgres >/dev/null 2>&1 || [ $attempt -eq $max_attempts ]; do
        attempt=$((attempt + 1))
        echo -n "."
        sleep 1
    done
    echo ""
    
    if [ $attempt -eq $max_attempts ]; then
        print_warning "Database might not be ready yet, but continuing..."
    else
        print_success "Database is ready"
    fi
    
    # 6. Generate Prisma client
    print_header "Setting up Prisma"
    print_info "Generating Prisma client..."
    pnpm run db:generate
    print_success "Prisma client generated"
    
    # 7. Run database migrations
    print_info "Running database migrations..."
    if pnpm run db:migrate; then
        print_success "Database migrations completed"
    else
        print_warning "Migration failed. You may need to run 'pnpm run db:push' or 'pnpm run db:migrate' manually"
    fi
    
    # 8. Display success message and next steps
    print_header "Setup Complete! 🎉"
    
    echo ""
    print_success "Your Persona application is ready to use!"
    echo ""
    echo -e "${BLUE}Next steps:${NC}"
    echo "  1. Update your .env file with required environment variables"
    echo "  2. Start the development server: ${GREEN}pnpm run dev${NC}"
    echo "  3. Open your browser to: ${GREEN}http://localhost:3000${NC}"
    echo ""
    echo -e "${BLUE}Useful commands:${NC}"
    echo "  • Development server:  ${GREEN}pnpm run dev${NC}"
    echo "  • Database studio:     ${GREEN}pnpm run db:studio${NC}"
    echo "  • View Docker logs:    ${GREEN}pnpm run docker:logs${NC}"
    echo "  • Stop Docker:         ${GREEN}pnpm run docker:down${NC}"
    echo "  • Adminer (DB UI):     ${GREEN}http://localhost:8080${NC}"
    echo ""
    
    # Check if OPENAI_API_KEY is set
    if ! grep -q "OPENAI_API_KEY=.*[a-zA-Z0-9]" .env 2>/dev/null; then
        print_warning "Don't forget to add your OPENAI_API_KEY to the .env file!"
    fi
}

# Run the main function
main "$@"

