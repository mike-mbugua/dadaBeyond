import React from "react";
import "./Mission.css";
import mission2 from "../../assets/images/mission2.jpg";
import Question from "../../assets/images/Question.png";
// import FontAwesomeIcon from "@fort";
function Mission() {
  return (
    <div className="mission__container">
      <div className="mission__header">
        <h1>Our Mission </h1>
        <img src={Question} alt="" />
      </div>
      <div className="mission__two__parts">
        <div className="image__part">
          <img src={mission2} alt="" />
        </div>
        <div className="info__part">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed unde
            itaque officia doloribus odit, tempore tenetur. Labore id illum
            dolor reprehenderit delectus, perferendis ea eum magni illo commodi
            et optio unde libero laudantium? Accusantium ipsum quis vero nobis
            dolorem enim. Voluptatibus ipsam quasi ab aperiam molestias eius,
            quibusdam accusantium quis soluta, molestiae, delectus vel eligendi!
            Architecto veritatis delectus repellat, et, aspernatur illo facere
            labore dolorum nulla at ab! Et ipsam quas quis explicabo eligendi
            vel totam alias voluptate nobis dolorum sit, excepturi assumenda
            iusto ipsa reprehenderit eum ducimus? Cum numquam temporibus maiores
            modi sit iusto quaerat, exercitationem dolorum vitae necessitatibus
            mollitia cupiditate corrupti odit laborum doloribus nobis, amet
            autem facere repellat doloremque quae. A eaque ad perferendis,
            beatae molestias, explicabo enim praesentium voluptatem cum,
            similique ipsa! Temporibus, deserunt nulla neque delectus assumenda
            ullam enim iure laudantium nam excepturi aspernatur totam
            consequatur, obcaecati cupiditate reprehenderit libero repellat.
            Quod aliquid velit, totam dolor, repellendus, ducimus accusamus odio
            minima veritatis unde ab! Reiciendis quaerat hic asperiores, maxime
            at dolorem dolore. voluptatibus, tempore consequuntur minima quia
            aut. Ipsa nemo quidem assumenda, non, ut dolore atque, soluta porro
            eos dolorem ducimus sequi dicta? Vero tempore fugiat veritatis,
            culpa saepe rem vel, dignissimos ratione, odit assumenda pariatur?
            Velit doloremque omnis suscipit, illo veniam ex deleniti voluptatem
            fugit, odio accusantium facilis facere nisi saepe explicabo esse
            quibusdam quia reprehenderit. Saepe officiis totam necessitatibus
            autem porro exercitationem temporibus corrupti voluptates?
            Consequuntur, eligendi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mission;
