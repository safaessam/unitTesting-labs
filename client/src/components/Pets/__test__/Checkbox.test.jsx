import { render, screen } from '@testing-library/react';
import Checkbox from '../Checkbox';



test ('Conditional Rendering' , () =>{
    render (<Checkbox lableOn={"On"} lableOff={"Off"} />)
    expect(screen.queryByLabelText(/"On"/i)).not.toBeInTheDocument();
})

