import Link from "next/link";

export default function PostPreview({
  excerpt,
  slug,
  tags = [],
  title,
  thumbnail,
}) {
  return (
    <div className="post">
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a className="link">
          <img alt={title} className="thumbnail" src={thumbnail} />
          <h1 className="title">{title}</h1>
          <div className="excerpt">{excerpt}</div>
          <div className="tags">{tags.join(", ")}</div>
        </a>
      </Link>
      <style jsx>{`
        .link {
          text-decoration: none;
        }

        .post {
          grid-column: auto / span 2;
          text-align: center;
        }

        .post:hover .thumbnail {
          transform: scale(1.02);
          box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.25);
        }

        .thumbnail {
          box-shadow: 0 0 40px -20px rgba(0, 0, 0, 0.25);
          height: 560px;
          object-fit: cover;
          transition: all 0.15s ease;
        }

        .excerpt {
          margin-bottom: 1rem;
        }

        .tags {
          font-size: 0.8rem;
          color: var(--color-2);
        }

        @media (min-width: 920px) {
          .post {
            grid-column: auto / span 1;
          }
        }
      `}</style>
    </div>
  );
}
