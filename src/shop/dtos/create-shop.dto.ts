import { User } from 'src/user/interfaces/user.interface';
import { Address } from '../interfaces/address.interface';
import { Product } from '../interfaces/product.interface';
import { IsNotEmpty } from 'class-validator';
import { Location } from '../interfaces/location.interface';

export class CreateShopDto {
  @IsNotEmpty()
  logoURL: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  photoURL: string[];

  @IsNotEmpty()
  serviceType: string[];

  @IsNotEmpty()
  paymentType: string[];

  @IsNotEmpty()
  products: Product[];

  @IsNotEmpty()
  hashtags: string[];

  @IsNotEmpty()
  location: Location;

  @IsNotEmpty()
  telephone: string;

  @IsNotEmpty()
  contact: string;

  @IsNotEmpty()
  address: Address;

  @IsNotEmpty()
  owners: User[];
}
