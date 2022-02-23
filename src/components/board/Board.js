import './index.css';

export function Board(){
    return (
        <div className="board">
            <div className="line vertical-line line-1"></div>
            <div className="line vertical-line line-2"></div>

            <div className="line horizontal-line line-1"></div>
            <div className="line horizontal-line line-2"></div>
        </div>
    );
}