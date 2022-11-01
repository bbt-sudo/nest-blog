import { IsNotEmpty } from 'class-validator';
import { IsExisteRule } from 'src/common/rules/is-existe.rule';

export default class FindListDto {
  page: number;
  page_number: number;
}
