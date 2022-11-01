import { IsNotEmpty } from 'class-validator';

export default class FansDto {
  @IsNotEmpty({ message: 'ID不能为空' })
  id: number;
}
