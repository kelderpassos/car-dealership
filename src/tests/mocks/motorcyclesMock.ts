import { IMotorcycle } from "../../interfaces/entities/IMotorcycle";

const bodyMock: IMotorcycle = {
  model: "Honda CG Titan 125",
  year: 1963,
  color: "red",
  buyValue: 3500,
  category: "Street",
  engineCapacity: 125
};

const motorcycleMock: IMotorcycle = {
  model: 'Honda CG Titan 125',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  category: 'Street',
  engineCapacity: 125,
};

const allMotorcyclesMock: IMotorcycle[] = [
  {
		model: 'Honda CG Titan 125',
		year: 1963,
		color: 'red',
		buyValue: 3500,
		category: 'Street',
		engineCapacity: 125,
	},
	{
		model: 'Harley Davidson Super',
		year: 2022,
		color: 'black',
		buyValue: 3500000,
		category: 'Street',
		engineCapacity: 150
	}
];

export { bodyMock, motorcycleMock, allMotorcyclesMock };