import { IsNotEmpty } from 'class-validator';
import { IsNoteExistsRule } from 'src/common/rules/is-not-exists.tule';

export class CreateArticleDto {
  @IsNotEmpty({ message: '标题不能为空' })
  title: string;
  @IsNotEmpty({ message: '内容不能为空' })
  content: string;
  @IsNotEmpty({ message: '请选择栏目' })
  categoryId: number;
  @IsNotEmpty({ message: '作者id不能为空' })
  // @IsNoteExistsRule('user', { message: '用户已经注册' })
  userId: number;
  reading: number;
  give: number;
  img: string;
}
