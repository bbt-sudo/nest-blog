import { PartialType } from '@nestjs/mapped-types';
import { CreateTxupDto } from './create-txup.dto';

export class UpdateTxupDto extends PartialType(CreateTxupDto) {}
