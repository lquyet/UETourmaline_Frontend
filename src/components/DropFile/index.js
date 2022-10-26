import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import uploadImages from '../../assets/images';
import styles from './DropFile.module.scss';

const cx = classNames.bind(styles);

function DropFile({ onFileChange }) {
    const [fileList, setFileList] = useState([]);
    const dropAreaRef = useRef();

    const handleDragEnter = () => {
        dropAreaRef.current.classList.add(styles.dragover);
    };
    const handleDragLeave = () => {
        dropAreaRef.current.classList.remove(styles.dragover);
    };
    const handleDrop = () => {
        dropAreaRef.current.classList.remove(styles.dragover);
    };
    const handleDropFile = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            const newFileList = [...fileList, newFile];
            setFileList(newFileList);
            onFileChange(newFileList);
        }
    };
    const handleRemoveFile = (file) => {
        const newFileList = [...fileList];
        newFileList.splice(fileList.indexOf(file), 1); // or passing index instead of element
        setFileList(newFileList);
        onFileChange(fileList);
    };

    return (
        <div className={cx('wrapper')}>
            <div
                ref={dropAreaRef}
                className={cx('drop-area')}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <div>
                    <img src={uploadImages.cloundUpload} alt="" />
                    <p>Drag and Drop your files here</p>
                </div>
                <input type="file" onChange={handleDropFile} />
            </div>

            {fileList.length > 0 && (
                <div className={cx('preview')}>
                    <p>Ready to upload</p>
                    <div className={cx('file-list')}>
                        {fileList.map((file, index) => (
                            <div key={index} className={cx('drop-file-item')}>
                                {console.log(file.type)}
                                <img src={uploadImages[file.type.split('/')[1]] || uploadImages.default} alt="" />
                                <div className={cx('drop-file-item-info')}>
                                    <p>{file.name}</p>
                                    <p>{file.size}B</p>
                                </div>
                                <span
                                    className={cx('del-drop-file-item')}
                                    onClick={() => {
                                        handleRemoveFile(file);
                                    }}
                                >
                                    &times;
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default DropFile;
