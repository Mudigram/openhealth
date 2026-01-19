import { z } from "zod";

export const FacilityQuerySchema = z.object({
  state: z.string().optional(),
  type: z.enum(['hospital', 'clinic', 'pharmacy', 'laboratory']).optional(),
  limit: z.coerce.number().min(1).max(100).default(20),
});