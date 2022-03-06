import { Grid } from '@mui/material';
import YouTubeVideo from './components/project/YouTubeVideo';
import gif1 from './assets/animated-gifs/confetti.gif';
import {
  beeWareDescription,
  freshFurnitureDescription,
  visualizerDescription,
  videoGameDatabaseDescription,
  minecraftTileDescription,
  trafficSimDescription,
  queryDescription,
  tradingCardDescription,
  storeInventDescription,
  portfolioDescription
} from './projectConstants';
import {
  footprintDescription,
  gitHubbersDescription,
  prideMatchDescription,
  prometheusDescription,
  localHackDayDescription,
  foodyFamilyDescription
} from './hackathonConstants';
import { 
  mtnDescription,
  sakuraMediaDescription } 
  from './workEConstants';

export function reveal() {
  var reveals = document.querySelectorAll(".reveal")
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

export function displayYoutubeWithLink(link, images) {
  if (link !== '') {
    return (
      <Grid item xs={12} lg={4}>
        <YouTubeVideo youtube={link} />
      </Grid>
        
    );
  } else if (images.length !== 0) {
    return (displayImage(images));
  } else {
    return ('');
  }
}

export function displayImage(images) {
    return (
      <Grid item xs={12} lg={4}>
        <div className={'noncarousel-img-page'}>
        <img
          src={images[0].loc}
          alt={images[0].title}
        />
        </div>
        </Grid>
    )
        
}

export function isEven(n) {
  return n % 2 === 0;
}

export function displayFirstPlace() {
  return (
    <div className='align-logo-text align-center first-place-padding'>
      <img
        className='animted-gif'
        src={gif1}
        alt="Trophy" />
      <h5 className='animate__animated animate__pulse animate__infinite animate-speed'>
        FIRST PLACE in Sponsored Challenge</h5>
    </div>
  )
}

export function displayPDescription(typeId, isFeatured) {
  switch (typeId) {
    case 0:
      return (freshFurnitureDescription(isFeatured));
    case 1:
      return (beeWareDescription(isFeatured));
    case 2:
      return (visualizerDescription(isFeatured));
    case 3:
      return (videoGameDatabaseDescription(isFeatured));
    case 4:
      return (trafficSimDescription(isFeatured));
    case 5:
      return (minecraftTileDescription(isFeatured));
      case 6:
        return (tradingCardDescription(isFeatured));
    case 7:
      return (queryDescription(isFeatured));
    case 8:
      return (storeInventDescription(isFeatured));
    case 9: 
      return (portfolioDescription(isFeatured));
    default:
      return ("");
  }
}

export function displayHDescription(typeId, isFeatured) {
  switch (typeId) {
    case 0:
      return (gitHubbersDescription(isFeatured))
    case 1:
      return (prideMatchDescription(isFeatured));
    case 2:
      return (footprintDescription(isFeatured));
    case 3:
      return (prometheusDescription(isFeatured));
    case 4:
      return (foodyFamilyDescription(isFeatured));
    case 5:
      return (localHackDayDescription());
    default:
      return ("");
  }
}

export function displayWDescription(typeId) {
  switch (typeId) {
    case 0:
      return (sakuraMediaDescription());
    case 1:
      return (mtnDescription());
    default:
      return ('');
  }
}

export function handleLink(link) {
  const win = window.open(link, '_blank');
  if (win != null) {
    win.focus();
  }
}