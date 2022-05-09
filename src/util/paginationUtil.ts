type paginationType = {
  pageSize: string | number;
  current: string | number;
};

export default class PaginationUtil {
  pageSize: number;

  current: number;

  start: number;

  constructor({ pageSize = '10', current = '1' }: paginationType) {
    if (typeof current === 'string') {
      this.current = parseInt(current, 10);
    }
    if (typeof pageSize === 'string') {
      this.pageSize = parseInt(pageSize, 10);
    }
    this.start = (this.current - 1) * this.pageSize;
  }

  getPageSize() {
    return this.pageSize;
  }

  getCurrent() {
    return this.current;
  }

  getStart() {
    return this.start;
  }

  getObject() {
    return this;
  }
}
