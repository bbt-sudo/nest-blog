import { IsNotEmpty } from 'class-validator';
import { IsNoteExistsRule } from 'src/common/rules/is-not-exists.tule';

export class CreateReviewDto {
  @IsNotEmpty({ message: '内容不能为空' })
  text: string;
  @IsNotEmpty({ message: '文章Id不能为空' })
  articleId: number;
  @IsNotEmpty({ message: '作者id不能为空' })
  userId: number;
}
