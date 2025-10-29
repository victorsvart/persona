/**
 * AI-Powered Transferable Skills Analysis
 * Let the AI model dynamically analyze skill transferability
 */

import OpenAI from 'openai';

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  throw new Error('OPENAI_API_KEY environment variable is required');
}

const openaiClient = new OpenAI({ apiKey });

export interface SkillGapAnalysis {
  missingSkills: Array<{
    skill: string;
    importance: 'critical' | 'important' | 'nice-to-have';
  }>;
  transferableSkills: Array<{
    required: string;
    userHas: string[];
    sharedConcepts: string[];
    confidenceLevel: 'high' | 'medium' | 'low';
    bridgeLanguage: string;
  }>;
  quickWins: Array<{
    suggestion: string;
    effort: 'minimal' | 'moderate' | 'significant';
  }>;
  overallMatch: number; // 0-100 percentage
}

/**
 * Analyze skill gaps using AI
 */
export async function analyzeSkillGaps(
  userSkills: string[],
  jobPosting: string,
  jobRole: string
): Promise<SkillGapAnalysis> {
  const prompt = `You are a technical recruiter and career coach analyzing skill alignment for a job application.

**Job Role:** ${jobRole}

**Job Posting:**
${jobPosting}

**Candidate's Skills:**
${userSkills.join(', ')}

**Task:** Analyze the skill gap and transferability. Provide a JSON response with:

1. **missingSkills**: Skills required by the job that the candidate doesn't explicitly have
   - skill: the missing skill name
   - importance: 'critical' | 'important' | 'nice-to-have'

2. **transferableSkills**: Candidate's skills that transfer to required skills
   - required: the skill required by the job
   - userHas: array of candidate's skills that transfer to this
   - sharedConcepts: array of shared underlying concepts
   - confidenceLevel: 'high' | 'medium' | 'low' (how well the skill transfers)
   - bridgeLanguage: a professional sentence to frame this on the resume (be truthful, don't claim direct experience)

3. **quickWins**: Actionable suggestions to strengthen the application
   - suggestion: what the candidate could quickly do
   - effort: 'minimal' | 'moderate' | 'significant'

4. **overallMatch**: 0-100 percentage of how well candidate's skills match the job

**Important Guidelines:**
- Be realistic about transferability (e.g., Java → Golang is high confidence, but Java → Machine Learning is low)
- Bridge language must be TRUTHFUL - frame transferable competencies, never claim direct experience
- Quick wins should be practical (e.g., "Complete a Golang tutorial and build a small project")
- Consider both technical skills AND soft skills/experience

Return ONLY valid JSON, no markdown formatting.`;

  try {
    const response = await openaiClient.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: 'You are a technical recruiter analyzing skill transferability. Always respond with valid JSON only.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.3, // Lower temperature for more consistent analysis
      response_format: { type: 'json_object' },
    });

    const content = response.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No response from AI');
    }

    const analysis = JSON.parse(content) as SkillGapAnalysis;
    return analysis;
  } catch (error) {
    console.error('Error analyzing skill gaps:', error);
    // Return empty analysis on error
    return {
      missingSkills: [],
      transferableSkills: [],
      quickWins: [],
      overallMatch: 70, // Default to neutral match
    };
  }
}

