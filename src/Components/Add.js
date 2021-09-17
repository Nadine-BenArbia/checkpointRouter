import * as React from 'react';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import { Label } from '@material-ui/icons';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  p: 2,
  px: 4,
  pb: 3,
};

export default function Add({addMovie}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 const [newMovie, setnewMovie] = useState({});
 handleChange = (e)=> setnewMovie({...newMovie,[e.target.name ]:e.target.value });


  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open modal
      </button>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
    <Box sx={style}>
       
     <form>
         <label> name="name" </label>
         <input onChange ={((el)=> handleChange(e))} /> 
         <label> description="description" </label>
         <input onChange ={ ((el)=> handleChange(e))} /> 
         <label> rating="rating" </label>
         <input onChange ={((el)=>  handleChange(e))} 

         type="number"
          min={1} 
          max={10} /> 

         <label> type ="type"</label>
         <input onChange ={((el)=>  handleChange (e))} /> 
         <label> date="date" </label>
         <input onChange ={((el)=>  handleChange(e))} />
         <label> image="image" </label>
         <input onChange ={((el)=>  handleChange(e))} />
         <button onClick={(e)=>{
           e.preventDefault();
           addMovie({newMovie}); 
           handleClose();
          }}
          >
          submet
          </button>  
      </form>
         
    </Box>
      </StyledModal>
    </div>
  );
}
