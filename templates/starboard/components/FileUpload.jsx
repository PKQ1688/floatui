/*
 * @Author       : adolf adolf1321794021@gmail.com
 * @Date         : 2023-11-16 11:56:28
 * @LastEditors  : adolf adolf1321794021@gmail.com
 * @LastEditTime : 2023-11-16 11:56:32
 * @FilePath     : /floatui/templates/starboard/components/FileUpload.jsx
 * @Description  : 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// components/FileUpload.js
const FileUpload = ({ onFileUpload }) => {
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            onFileUpload(file);
        }
    };

    return (
        <div>
            <input type="file" accept="video/*" onChange={handleFileChange} />
        </div>
    );
};

export default FileUpload;
