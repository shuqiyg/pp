//links
import Link from "next/link"

//icons
import {RiYoutubeLine,
        RiInstagramLine,
        RiFacebookLine,
        RiDribbbleLine,
        RiBehanceLine,
        RiPinterestLine,
        RiRedditLine,
        RiTwitterLine,
        RiTwitchLine,
      } from 'react-icons/ri'

const Socials = () =>{
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={'https://www.reddit.com/'} className="hover:text-accent transition-all duration-300">
        <RiRedditLine />
      </Link>
      <Link href={'https://twitter.com/elonmusk'} className="hover:text-accent transition-all duration-300">
        <RiTwitterLine />
      </Link>
      <Link href={'https://www.twitch.tv/'} className="hover:text-accent transition-all duration-300">
        <RiTwitchLine />
      </Link>
      <Link href={'https://www.instagram.com/kingjames/'} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={'https://www.facebook.com/'} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
      <Link href={'https://www.espn.com/nba/'} className="hover:text-accent transition-all duration-300">
        <RiDribbbleLine />
      </Link>
      <Link href={'https://www.behance.net/'} className="hover:text-accent transition-all duration-300">
        <RiBehanceLine/>
      </Link>
      <Link href={'https://www.pinterest.com/'} className="hover:text-accent transition-all duration-300">
        <RiPinterestLine />
      </Link>
    </div>
  )
};

export default Socials;
