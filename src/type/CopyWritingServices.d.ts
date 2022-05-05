import CopyWriting from '@/entity/CopyWriting';

declare namespace CopyWritingType {
  export type LangList = {
    langKey: string;
    langText: string;
  };

  export interface CopyWritingError extends CopyWriting {
    errorMsg: string;
  }

  export interface UploadEvent {
    updateList: Array<CopyWriting>;
    createList: Array<CopyWriting>;
    errorList: Array<CopyWritingError>;
  }
}
export default CopyWritingType;
