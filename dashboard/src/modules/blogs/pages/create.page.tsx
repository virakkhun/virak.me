import { BlogWrapper } from "../components/blog-wrapper.component";
import { CreateBlogForm } from "../components/create-blog-form.component";

function CreateBlogPage() {
  return (
    <BlogWrapper>
      <h1 class="text-xl font-semibold mb-4">Create a blog</h1>
      <CreateBlogForm />
    </BlogWrapper>
  );
}

export default CreateBlogPage;
