import { IsNotEmpty } from 'class-validator';
import { IsExisteRule } from 'src/common/rules/is-existe.rule';

export default class ReadingDto {
  id: number;
  rading: number;
}
