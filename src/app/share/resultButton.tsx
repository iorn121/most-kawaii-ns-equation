import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

export function ResultButton() {
  const url = encodeURIComponent(
    "https://most-kawaii-ns-equation.vercel.app/result"
  );
  const text = encodeURIComponent(
    "一番かわいいナビエ・ストークス方程式の投票結果はこちら！\n#MostKawaiiNSEquation\n"
  );
  const twitterUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;

  return (
    <div className="flex justify-center h-auto mb-5">
      <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
        Share on <FontAwesomeIcon icon={faXTwitter} size="2x" />
      </a>
    </div>
  );
}
