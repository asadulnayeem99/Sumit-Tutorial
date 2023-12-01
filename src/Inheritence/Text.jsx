import Emoji from "./Emoji";
export default class Text extends Emoji {
  constructor(props) {
    super(props);
  }
  render() {
    const deco = this.addEmoji("I am Text", "🤩");
    return super.render(deco);
  }
}
