import { getEmotionImage } from './../util/get-emotion-image';
import Button from './Button';
import './DiaryItem.css';
import { useNavigate } from 'react-router-dom';

const DiaryItem = ({ id, emotionId, createdData, content }) => {
    const nav = useNavigate();

    return (
        <div className="DiaryItem">
            <div className={`img_section img_section_${emotionId}`}>
                <img src={getEmotionImage(emotionId)} />
            </div>
            <div className="info_section">
                <div className="created_date">
                    {new Date(createdData).toLocaleDateString()}
                </div>
                <div className="content">{content}</div>
            </div>
            <div className="button_section">
                <Button onClick={() => nav(`diary/${id}`)} text={'수정하기'} />
            </div>
        </div>
    );
};

export default DiaryItem;
