import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const MotorcycleSchema = VehicleZodSchema.extend({
  category: z.enum(['Street', 'Trail', 'Custom']),
  engineCapacity: z.number().int().lte(2500),
});

type IMotorcycle = z.infer<typeof MotorcycleSchema>;

export { IMotorcycle, MotorcycleSchema };