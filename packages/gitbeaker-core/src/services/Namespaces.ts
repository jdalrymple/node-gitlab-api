import { BaseService } from '@gitbeaker/requester-utils';
import { RequestHelper, PaginatedRequestOptions, Sudo } from '../infrastructure';

export class Namespaces<C extends boolean = false> extends BaseService<C> {
  all(options?: PaginatedRequestOptions) {
    return RequestHelper.get()(this, 'namespaces', options);
  }

  show(namespaceId: string | number, options?: { search?: string } & Sudo) {
    const nId = encodeURIComponent(namespaceId);

    return RequestHelper.get()(this, `namespaces/${nId}`, options);
  }
}
