import imagePost from "../../assets/post.jpg";
import mainStyles from "./Main.module.css";

function Main() {
    return (
        <>
            <main>
                <div className={mainStyles.card}>
                    <img src={imagePost} alt="" />
                    <h3>Titolo del post</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius laudantium, molestias amet veniam in debitis cumque ipsam aut. Tempore earum consectetur aperiam alias. Aut sint, animi adipisci ea sed temporibus aliquid consequatur harum corporis molestias in dolores iste odit sequi ipsum sapiente nihil, illo est neque! Ullam repudiandae repellendus ad?</p>
                    <button>Leggi di più</button>
                </div>
            </main>
        </>
    )
}

export default Main