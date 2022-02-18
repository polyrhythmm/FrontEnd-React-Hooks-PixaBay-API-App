function About(props) {
  return (
    <div className="contatiner p-3">
      <div className="row">
        <div className="col-sm-8 col-md-7 py-4">
          <h4>About</h4>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna
            lectus, pharetra quis leo at, mattis dapibus arcu. Nulla iaculis
            nibh at nisl hendrerit, in sodales ipsum aliquet. Nulla tristique
            gravida neque in pellentesque. Vestibulum non hendrerit nunc. Sed
            non mollis felis. Donec posuere dapibus orci vel posuere.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vivamus vitae neque nisi. Aliquam eros
            purus, vulputate quis erat quis, finibus laoreet lectus.
            Pellentesque ornare pharetra nunc in pretium
          </p>
        </div>
        <div className="col-sm-4 offset-md-1 py-4">
          <h4>Contact</h4>
          <ul className="list-unstyled">
            <li>
              <a
                href="http://www.twitter.com"
                className="p-1 font-weight-normal"
              >
                Follow on Twitter @
              </a>
            </li>
            <li>
              <a href="http://www.gmail.com" className="p-1 font-weight-normal">
                Email me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
