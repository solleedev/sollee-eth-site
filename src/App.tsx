import { List } from 'components/List';
import { ExternalLink } from 'components/Link';
import { ListItem } from 'components/ListItem';

function App() {
  return (
    <div className="bg-gradient-to-br from-red-600 to-yellow-500 flex flex-row justify-center xl:place-content-center p-4 h-full min-h-screen w-full">
      <div className="">
        <div className="bg-white p-4 rounded">
          <h1 className="text-4xl font-bold">
            ☀️🧑‍💻{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-orange-500">
              sollee
            </span>
          </h1>
          <h2 className="text-xl mt-2">he/him web3 dev</h2>
          <label>
            <p className="mt-2 text-sm">basic tidbits about me, expressed in bullet points</p>
            <List className="overflow-y-auto">
              <ListItem>web3 dev & libertarian activist</ListItem>
              <ListItem>ethereum maximalist</ListItem>
              <ListItem>tokiponist (jan Soli)</ListItem>
              <ListItem>prefer reading &gt; listening</ListItem>
              <ListItem>anarcho-capitalist libertarian</ListItem>
              <ListItem>socially progressive</ListItem>
              <ListItem>twitter shitposter</ListItem>
              <ListItem>interested in AI</ListItem>
            </List>
          </label>
        </div>
        <div className="bg-white p-4 rounded">
          <h1 className="font-mono text-xl">socials</h1>
          <List className="overflow-auto">
            <ListItem>
              <ExternalLink href="https://twitter.com/sollee_eth">
                Twitter (sollee_eth)
              </ExternalLink>
            </ListItem>{' '}
            <ListItem>
              <ExternalLink href="https://mirror.xyz/sollee.eth">
                Mirror Blog (sollee.eth)
              </ExternalLink>
            </ListItem>{' '}
            <ListItem>Discord (Sollee#3367)</ListItem>
            <ListItem>
              <ExternalLink href="mailto://solleedev@proton.me">
                Email (solleedev@proton.me)
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://github.com/solleedev">Github (solleedev)</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://mage.space/u/sollee">
                Mage (u/sollee, requires login)
              </ExternalLink>
            </ListItem>
          </List>
        </div>
        <div className="bg-white p-4 rounded">
          <h1 className="font-mono text-xl">good read (mainly crypto, politics)</h1>
          <List className="overflow-auto">
            <ListItem>
              <ExternalLink href="https://thenetworkstate.com">
                The Network State <i className="text-sm font-semibold">by Balaji Srinivasan</i>
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://nation3.org/manifesto">
                Nation3 Manifesto <i className="text-sm font-semibold">by Nation3</i>
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://nation3.org/manifesto">
                Vitalik's blog <i className="text-sm font-semibold">by Vitalik Buterin</i>
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://saifedean.com">
                The Bitcoin Standard <i className="text-sm font-semibold">by Saifedean Ammous</i>
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://saifedean.com">
                The Fiat Standard <i className="text-sm font-semibold">by Saifedean Ammous</i>
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://twitter.com/divine_economy/status/1453480931487006728">
                13 ways of looking at a DAO <i className="text-sm font-semibold">by David Phelps</i>
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.bankless.com/ultra-sound-money-">
                Ultra Sound Money <i className="text-sm font-semibold">by David Hoffman</i>
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://cdn.mises.org/The%20Ethics%20of%20Liberty%2020191108.pdf">
                The Ethics of Liberty <i className="text-sm font-semibold">by Murray Rothbard</i>
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.lesswrong.com/rationality">
                Sequences <i className="text-sm font-semibold">by Eliezer Yudkowsky</i>
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://effectiveaccelerationism.substack.com/p/repost-effective-accelerationism">
                e/acc{' '}
                <i className="text-sm font-semibold">
                  by @zestular, @creatine_cycle, @BasedBeffJezos and @bayeslord
                </i>
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.effectiveacceleration.org/posts/zdWXKn6oBatijSRfo/our-world-is-gasping-for-acceleration">
                Our world is gasping for acceleration.{' '}
                <i className="text-sm font-semibold">by rhodos</i>
              </ExternalLink>
            </ListItem>
          </List>
        </div>
        <div className="bg-white p-4 rounded">
          <h1 className="font-mono text-xl">past and current work</h1>
          <List>
            <ListItem>
              <ExternalLink href="https://twitter.com/sollee_eth/status/1626928236767633408">
                big ol' twitter thread debunking bitcoin maxis
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://github.com/solleedev/n3-law-registry">
                Nation3 Document Registry
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.youtube.com/watch?v=ZRDqAy5rkd4">
                Something coming out soon...
              </ExternalLink>
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
}

export default App;
