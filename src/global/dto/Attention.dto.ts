import { IsNotEmpty } from 'class-validator';

export default class AttentionDto {
  @IsNotEmpty({ message: '用户Id不能为空' })
  userId: number;
  @IsNotEmpty({ message: '被关注用户的Id不能为空' })
  Attention: number;
}
