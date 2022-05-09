export default class PaginationUtil {
  pageSize: number;

  current: number;

  start: number;

  constructor({ pageSize = '10', current = '1' }) {
    this.current = parseInt(current, 10);
    this.pageSize = parseInt(pageSize, 10);
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
