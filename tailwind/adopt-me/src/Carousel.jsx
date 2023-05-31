import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className='w-30 flex pt-10'>
        <img
          className='mr-20 w-40 rounded-full'
          src={images[active]}
          alt='animal'
        />
        <div className=' flex w-40'>
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              className={index === active ? 'active' : ''}
              alt='animal thumbnail'
              onClick={this.handleIndexClick}
              data-index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
