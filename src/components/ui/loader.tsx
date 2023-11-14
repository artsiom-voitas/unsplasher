import { CircleLoader } from 'react-spinners';

export default function Loader() {
    return (
        <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
            <CircleLoader
                color="#800080"
                size={75}
            />
        </div>
    );
}
