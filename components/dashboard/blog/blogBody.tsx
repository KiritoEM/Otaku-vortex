const BlogBody = (): JSX.Element => {
  return (
    <div className="blog__body">
      <div className="row gx-2">
        <div className="col-5">
          <div className="section-cover">
            <img src="/list-cover.png" alt="" />
          </div>
        </div>

        <div className="col-6">
          <div className="section-content">
            <div className="title">
              <h2>Attack on titan</h2>
            </div>
            <div className="synopsis">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis veritatis velit molestias necessitatibus, sit fugiat
                saepe optio provident veniam vel vero magnam fuga totam
                similique odit id modi magni exercitationem? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quas, necessitatibus
                nostrum. Dolores deserunt aliquam voluptatibus repellat! Ad hic
                repellendus facere dolor dolorem quia cum voluptatem, excepturi
                tempore itaque beatae animi. Distinctio dolor modi repellendus
                adipisci pariatur eligendi id odit repudiandae, culpa incidunt
                vitae aliquid excepturi? Doloribus maxime odio soluta. Ad rem in
                vero laboriosam voluptates, quam quod tempore illo odio tempora
                facilis nihil. Harum consequatur qui velit in rerum accusantium
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogBody;
