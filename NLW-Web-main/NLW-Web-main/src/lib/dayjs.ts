import lib from 'dayjs';
import 'dayjs/locale/pt-br';
import RelativeTime from 'dayjs/plugin/relativeTime';

lib.locale('pt-BR');
lib.extend(RelativeTime);

export const dayjs = lib