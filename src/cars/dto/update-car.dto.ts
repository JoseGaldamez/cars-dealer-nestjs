import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class UpdateCarDTO {
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsOptional()
  readonly brand?: string;

  @IsString()
  @IsOptional()
  @MinLength(3)
  readonly model?: string;
}
