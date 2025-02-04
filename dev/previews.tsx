import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox-next";
import {ExampleLoaderComponent, PaletteTree} from "./palette";
import Home from "@/app/page";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/ExampleLoaderComponent">
                <ExampleLoaderComponent/>
            </ComponentPreview>
            <ComponentPreview path="/Home">
                <Home/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;