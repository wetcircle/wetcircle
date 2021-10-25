import PageNotFoundGif from './PageNotFoundGif.gif';
import pnf from './PageNotFound.css'

const PageNotFound = () => {

    return (
        <body classname="pnf">
            <div classname = "pnfg" style={{
                position: 'absolute', left: '50%', top: '25%',
                transform: 'translate(-50%, -50%)',
            }}>
                <img src={PageNotFoundGif} alt="loading..." />
            </div>
        </body>
    );
};
export default PageNotFound;