import { FieldArrayWithId, UseFormReturn } from 'react-hook-form';
import { OnboardSchemaValues } from '../forms/onboard.schema';

type CommonStepProps = {
  form: UseFormReturn<OnboardSchemaValues>;
};

export type OnboardStepOneProps = CommonStepProps;

export type OnboardStepTwoProps = {
  addExperience: () => void;
  removeExperience: (idx: number) => void;
  experienceFields: FieldArrayWithId<OnboardSchemaValues, 'professional_experiences', 'id'>[];
} & CommonStepProps;

export type OnboardStepThreeProps = {
  addAcademic: () => void;
  removeAcademic: (idx: number) => void;
  academicFields: FieldArrayWithId<OnboardSchemaValues, 'academic_information', 'id'>[];
} & CommonStepProps;

export type OnboardStepFourProps = CommonStepProps;
