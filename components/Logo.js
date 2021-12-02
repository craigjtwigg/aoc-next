import Link from 'next/link'

export const Logo = (props) => {
    return (
        <div className="aoc-logo-wrapper"><Link href='/'><a>
            <h1 className={props.orientation}>ALEX OGDEN CLARK</h1></a></Link>
        </div>
    )
}
