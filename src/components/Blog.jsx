import { motion } from "framer-motion";
import { blogPosts } from "../data";
import "./Blog.css";

export default function Blog() {
  return (
    <section id="blog" className="premium-blog">
      <div className="bento-grid">
        {blogPosts.map((post, i) => (
          <motion.div
            key={post.id}
            className={`blog-card ${post.featured ? "featured" : ""}`}
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -10, scale: 1.03 }}
          >
            <div className="card-inner">
              {post.featured && <div className="badge">{post.badge}</div>}
              <div className="content">
                {post.featured ? (
                  <span className="date">{post.date}</span>
                ) : (
                  <span className="category">{post.category}</span>
                )}
                {post.featured ? <h2>{post.title}</h2> : <h3>{post.title}</h3>}
                {post.description && <p>{post.description}</p>}
                <a href={post.href} className="btn-minimal">
                  {post.linkLabel}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
