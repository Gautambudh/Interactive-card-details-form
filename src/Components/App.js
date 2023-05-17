import { Box, Container, Grid, Typography, TextField, Button } from '@mui/material'
import React from 'react';
import leftBg from '../assets/images/bg-main-desktop.png'
import bgMobile from '../assets/images/bg-main-mobile.png'
import cardFront from '../assets/images/bg-card-front.png'
import cardBack from '../assets/images/bg-card-back.png'
import tick from '../assets/images/icon-complete.svg'
import { setCardholderName, setCardNumber, setExpiryDate, setExpiryMonth, setCardCVC, setConfirmed, cardState} from './reduxSlice';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const { cardholderName, cardNumber, expiryDate, expiryMonth, cardCVC, confirm} = useSelector(cardState)

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12} md={4} sx={{height:{md:'100vh'}}}>
        {/* desktop view */}
            <Box 
            sx={{
            display:{xs:'none', md:'block'},
            position:'relative',
            backgroundImage:`url(${leftBg})`,
            height:'100%',
            width:'100%',
            backgroundRepeat: "no-repeat",}} >
            </Box>
            <Box sx={{position:'absolute', zIndex:2, top:{md:150, xs:135}, left:{lg:200, xs:27},
            zIndex:22,
            backgroundImage:`url(${cardFront})`,
            height:{md:203, xs:151}, width:{md:370, xs:275},
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "cover"}}>
              <Box sx={{display:'flex', gap:2, alignItems:'center', mt:{md:3, xs:2}, ml:{md:3, xs:2}}}>
                <Box sx={{borderRadius:'50%', bgcolor:'white', height:{md:40, xs:30}, width:{md:40, xs:30}}} />
                <Box sx={{borderRadius:'50%', border:'1.5px solid white', height:{md:20, xs:15}, width:{md:20, xs:15},}} />
              </Box>
              <Typography variant='h5' component='div' color='hsl(0, 0%, 100%)'
              sx={{ml:{md:3, xs:2}, mt:{md:7, xs:4}, letterSpacing:2, height:32 }}>
              {cardNumber.number ? cardNumber.number
              .replace(/\s/g, "")
              .replace(/(\d{4})/g, "$1 ")
              .trim()
              : 
              ""}
              </Typography>
              <Box sx={{display:'flex',alignItems:'center', mt:2, mx:{md:3, xs:2}, color:'hsl(0, 0%, 100%)',
              justifyContent:'space-between'}}>
              <Typography variant='subtitle2' component='h6' color='hsl(0, 0%, 100%)'
              sx={{letterSpacing:1 }}>
              {cardholderName ? cardholderName.toUpperCase() : ""}
              </Typography>
                <Typography variant='subtitle2' component='h6' color='hsl(0, 0%, 100%)'
              sx={{letterSpacing:1}}>
              {expiryDate.date ? `${expiryDate.date}/` : ""}
              {expiryMonth ? expiryMonth : ""}
              </Typography>
              </Box>
            </Box>
            <Box sx={{position:'absolute', zIndex:1, top:{md:373, xs:50}, left:{lg:280, xs:85},
            backgroundImage:`url(${cardBack})`,
            height:{md:203, xs:150}, width:{md:370, xs:275},
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "cover"}}>
            <Box sx={{display:'flex', width:'100%', justifyContent:'flex-end', position:'absolute', top:{md:88, xs:64}, px:5}}>
            <Typography variant='subtitle2' component='h6' color='hsl(0, 0%, 100%)'
              sx={{letterSpacing:1}}>
              {cardCVC.cvc ? cardCVC.cvc : ""}
              </Typography>
            </Box>
            </Box>
            
            {/* mobile view */}
            <Box 
            sx={{display:{xs:'block', md:'none', position:'relative',},
            backgroundImage:`url(${bgMobile})`,
            height:235,
            width:'100%',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "cover"}} />
        </Grid>

        <Grid item xs={12} md={8} sx={{mt:{xs:8, md:0}, bgcolor:'hsl(0, 0%, 100%)'}}>
            <Container maxWidth='xs' disableGutters sx={{height:'100%', p:{xs:2, md:2},
            display:'flex', alignItems:'center'}}>
              <Grid container direction="column" sx={{my:'auto', ml:0}}>
              {confirm ? 
                <>
                <Grid item sx={{mb:2, textAlign:'center'}}>
                  <Box component='img' src={tick} alt='..'/>
                </Grid>
                <Grid item sx={{mb:2}}>
                  <Typography variant='h5' component='div' color='hsl(278, 68%, 11%)' 
                  sx={{my:0.5, letterSpacing:3, fontWeight:'bold', textAlign:'center'}}>
                    THANK YOU!
                  </Typography>
                </Grid>
                <Grid item sx={{mb:2}}>
                  <Typography variant='body1' component='h5' 
                  sx={{my:0.5, letterSpacing:1, textAlign:'center', fontWeight:'bold'}}>
                  We've added your card details
                  </Typography>
                </Grid>
                <Grid item sx={{textAlign:'center', mt:2}}>
                <Button
                onClick={() => dispatch(setConfirmed({value: false}))}
                sx={{width:'100%', py:1, 
                bgcolor:'hsl(278, 68%, 11%)',
                color:'white',
                letterSpacing:1,
                ":hover":{
                  bgcolor:'hsl(278, 68%, 11%)'
                }}}>Continue</Button>
                </Grid>
                </>
              :
              <form autoComplete="off" onSubmit={handleSubmit}>
                <Grid item sx={{mb:2}}>
                  <Typography variant='subtitle2' component='div' sx={{my:0.5}}>Cardholder Name</Typography>
                  <TextField variant="outlined" placeholder='Jane Appleseed'  fullWidth
                  value={cardholderName ? cardholderName : ""}
                    onChange={(e) => dispatch(setCardholderName({ value: e.target.value }))}
                    sx={{"& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "purple"},
                      "&:hover fieldset": {
                        borderColor: 'purple',
                      },
                    }
                  }}
                  />
                </Grid>
                <Grid item sx={{mb:2}}>
                <Typography variant='subtitle2' component='div' sx={{my:0.5}}>Card Number</Typography>
                  <TextField error={cardNumber.error} variant="outlined" placeholder='e.g. 1234 5678 9123 0000' 
                  required
                  helperText={cardNumber.error ? "Wrong format, number only" : ""} 
                  fullWidth sx={{
                    ".MuiFormHelperText-root":{mx:0},
                    "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "purple"},
                      "&:hover fieldset": {
                        borderColor: 'purple',
                      },
                    }
                  }}
                  onChange={(e) => {
                    {
                      dispatch(setCardNumber({ value: e.target.value }));
                      // const isValidNumber =  /^[0-9\s]+$/.test(cardNumber);
                      // setError(!isValidNumber);
                      }
                    }
                  }
                  value={cardNumber.number ? cardNumber.number
                    .replace(/\s/g, "")
                    .replace(/(\d{4})/g, "$1 ")
                    .trim() 
                    : ""
                    }
                  inputProps={{
                    maxLength: 19,
                    // pattern: "^[\d\s]+$"
                  }}
                  />
                </Grid>
                <Grid item sx={{display:'flex', gap:2, mb:2}}>
                  <Box sx={{ width:{xs:'60%', md:'50%'}}}>
                  <Typography variant='subtitle2' component='div' sx={{my:0.5}}>Exp. Date (MM/YY)</Typography>
                  <Box sx={{display:'flex', gap:1}}>
                  <TextField variant="outlined" placeholder='MM'
                  error={expiryDate.error} 
                  helperText={expiryDate.error ? "Can't be blank" : "" }
                  required fullWidth sx={{
                    ".MuiFormHelperText-root":{mx:0},
                    "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "purple"},
                      "&:hover fieldset": {
                        borderColor: 'purple',
                      },
                    } }}
                    onChange={(e) => {
                      dispatch(setExpiryDate({ value: e.target.value }));
                      }
                    }
                    value={expiryDate.date ? expiryDate.date : ""}
                    inputProps={{
                    maxLength: 2
                  }}
                    />
                  <TextField variant="outlined" placeholder='YY' helperText=" " fullWidth 
                  required autoComplete='off'
                    onChange={(e) => dispatch(setExpiryMonth({ value: e.target.value }))}
                    value={expiryMonth ? expiryMonth : ""}
                    inputProps={{
                    maxLength: 2
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "purple"},
                      "&:hover fieldset": {
                        borderColor: 'purple',
                      },
                    } }}
                  />
                  </Box>
                  </Box>
                  <Box sx={{ width:{xs:'40%', md:'50%'}}}>
                  <Typography variant='subtitle2' component='div' sx={{my:0.5}}>CVC</Typography>
                  <TextField variant="outlined" placeholder='e.g. 123' 
                  error={cardCVC.error}
                  helperText={cardCVC.error ? "Can't be blank" : ""} 
                  fullWidth 
                  required sx={{
                    ".MuiFormHelperText-root":{mx:0},
                    "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "purple"},
                      "&:hover fieldset": {
                        borderColor: 'purple',
                      },
                    }
                  }}
                  onChange={(e) => dispatch(setCardCVC({ value: e.target.value }))}
                  value={cardCVC.cvc ? cardCVC.cvc : ""}
                  inputProps={{
                    maxLength: 3
                  }}
                  />
                  
                  </Box>
                </Grid>
                <Grid item sx={{textAlign:'center', mt:2}}>
                <Button
                type='submit'
                onClick={() => {
                  if (cardNumber.number.length === 0 || 
                  expiryDate.date.length === 0 || 
                  expiryMonth.length === 0 || 
                  cardCVC.cvc.length === 0 ) {
                    dispatch(setConfirmed({value: false}));
                  } else {
                    dispatch(setConfirmed({value: true}));
                  }
                   
                  }}
                sx={{width:'100%', py:1, 
                bgcolor:'hsl(278, 68%, 11%)',
                color:'white',
                letterSpacing:1,
                ":hover":{
                  bgcolor:'hsl(278, 68%, 11%)'
                }}}>Confirm</Button>
                </Grid>
              </form>
              }
              </Grid>
            </Container>
        </Grid>
      </Grid>
    </>
  )
}

export default App