

import Logo from "./logo";
import LogoLine from "./logoLine"
import Playground from './playground'
import PlaygroundLine from './playgroundLine'
import My from './my'
import MyLine from './myLine'
// import Phone from "./Phone";
// import Trash from "./Trash";
// import Message from "./Message";
// import Envelope from "./Envelope";

const Icon = props => {
    switch (props.name) {
        case "logo":
            return <Logo {...props} />;
        case "logoLine":
            return <LogoLine {...props} />;
        case "playground":
            return <Playground {...props} />;
        case "playgroundLine":
            return <PlaygroundLine {...props} />;
            case "my":
                return <My {...props} />;
            case "myLine":
                return <MyLine {...props} />;
        default:
            return;
    }
};

export default Icon;
