import { Scene } from 'react-scrollmagic';
import { interests } from '../../../data/interestData';
import { isEven } from '../../../helpers';
import '../../landing/Landing.css';
import LeftInterest from './LeftInterest';
import RightInterest from './RightInterest';

export default function Interests() {
    return (
        <Scene
            duration={350}
            pin={{ pushFollowers: true }}
            triggerHook={0.75}
            offset={300}
        >
            <div className='about-section-padding'>
                <h3 className='highlight-about'>Some fun facts!</h3>
                {interests.map(interest => {
                    return (
                        <div>
                            {isEven(interest.id)
                                ?
                                <LeftInterest interest={interest} />
                                :
                                <RightInterest interest={interest} />
                            }
                        </div>
                    )
                })
                }
            </div>
        </Scene>
    )
}