import { useGlobalContext } from '../context/GlobalContext';
import * as Styled from './../styles/components/DragAndDropInput';

import { Icons } from './Icons';

interface DragAndDropInputProps {
  isDragActive: boolean;
  handles: {
    enter: (e?: any) => any;
    leave: (e?: any) => any;
    over: (e?: any) => any;
    drop: (e?: any) => any;
  }
}

export function DragAndDropInput({ isDragActive, handles }: DragAndDropInputProps) {
  const {onViewModeInput} = useGlobalContext();

  return (
    <Styled.Container isDragActive={isDragActive}>
      <input disabled={onViewModeInput} hidden type="file" id="input-file-upload" multiple={true} />
      <Styled.Label disabled={onViewModeInput} id="label-file-upload" htmlFor="input-file-upload">
        <Icons.UploadFiles />
        <Styled.Text>
          <strong>Clique para fazer upload</strong> ou arraste e solte
          SVG, PNG ou JPG (máximo de 800x800)
        </Styled.Text>
      </Styled.Label>

      {
        isDragActive &&
        <Styled.DropOverlay
          onDragEnter={handles.enter}
          onDragLeave={handles.leave}
          onDragOver={handles.over}
          onDrop={handles.drop}
        >
        </Styled.DropOverlay>
      }
    </Styled.Container>
  )
}