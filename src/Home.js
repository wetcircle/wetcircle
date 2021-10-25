
import HomeLogo from './HomeLogo.png';
import TwitterLogo from './TwitterLogo.png';
import DiscordLogo from './DiscordLogo.png';
import OSLogo from './OSLogo.png';
import './App';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import './App.css';

export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: var(--secondary);
  padding: 10px;
  font-weight: bold;
  color: var(--secondary-text);
  width: 100px;
  cursor: pointer;
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

const Home = () => {
    return (
      
        <body className="cust" style={{
            textAlign: "center"

        }}>
            
            <br></br>
            <h1> <img src={HomeLogo} alt="loading..." style={{
                height: 100,
                width: 600
            }} /> </h1>
                <br></br><br></br>

                <a href="https://www.twitter.com/abstrctnumbers">
                    <img src={TwitterLogo} alt="loading..." style={{
                        height: 24,
                        padding: 2,
                        width: 24
                    }} />
                </a>
                <a href="https://www.discord.com">
                    <img src={DiscordLogo} alt="loading..." style={{
                        height: 24,
                        padding: 2,
                        width: 24
                    }} />
                </a>
                <a href="https://www.opensea.io">
                    <img src={OSLogo} alt="loading..." style={{
                        height: 24,
                        padding: 2,
                        width: 24
                    }} />
                </a>
                <br></br><br></br><br></br>

            <h2 style={{
                padding: "5px",
                fontSize: "2rem"
            }}>About</h2>
            <strong><p>
                Numbers is the first collection consisting <br></br>
                of 2021 interactive numbers stored on the Ethereum blockchain.<br></br>
                Each number is completely generated by code and permanently stored on IPFS.
                <br></br><br></br><br></br>
                <h2 style={{
                    padding: "5px",
                    fontSize: "2rem"
                }}>Fair Launch</h2>
                Inspired by The Dudes, each number <br></br>
                is generated upon minting. Each trait is </p></strong>
                set in the contract and will be chosen randomly. <br></br>

            <br></br><br></br><br></br>

            <h2 style={{
                padding: "5px",
                fontSize: "2rem"
            }}>When</h2>
            <strong><p>
                The public sale will begin at 9:30 EST 10/07.<br></br>
                This time was picked because gas is typically lower then.
            </p></strong>
            <br></br><br></br><br></br>
            <Link to="/mint">
                <StyledButton>MINT</StyledButton>
            </Link>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </body>

    );
}


export default Home;