import { e as createStaticVNode } from "./app.fb818619.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="_3-configuring-oidc-in-github" tabindex="-1"><a class="header-anchor" href="#_3-configuring-oidc-in-github" aria-hidden="true">#</a> 3. Configuring OIDC in GitHub</h1><ul><li><p>GitHub already has the OIDC components installed. However, you need to indicate to the GitHub action that will deploy the code to use OIDC authentication.</p></li><li><p>To show how to include OIDC authentication in a GitHub action,we will the following GitHub action named PushManual as an example :</p></li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> PushManual\n<span class="token key atrule">on</span><span class="token punctuation">:</span>\n  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>\n<span class="token key atrule">env</span><span class="token punctuation">:</span>\n  <span class="token key atrule">IMAGE_ID</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.AWS_ECR_URI <span class="token punctuation">}</span><span class="token punctuation">}</span>\n  <span class="token key atrule">TF_VERSION</span><span class="token punctuation">:</span> 1.2.2\n  <span class="token key atrule">TG_VERSION</span><span class="token punctuation">:</span> 0.37.1\n  <span class="token key atrule">TG_SRC_PATH</span><span class="token punctuation">:</span> terraform\n  <span class="token key atrule">TFC_WORKSPACE</span><span class="token punctuation">:</span> dev\n\n<span class="token key atrule">permissions</span><span class="token punctuation">:</span>\n  <span class="token key atrule">id-token</span><span class="token punctuation">:</span> write \n  <span class="token key atrule">contents</span><span class="token punctuation">:</span> read  \n<span class="token key atrule">jobs</span><span class="token punctuation">:</span>\n  <span class="token key atrule">docker_push</span><span class="token punctuation">:</span>\n\n  <span class="token key atrule">name</span><span class="token punctuation">:</span> docker push\n  <span class="token key atrule">environment</span><span class="token punctuation">:</span> tools\n  <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span><span class="token number">22.04</span>\n  <span class="token key atrule">steps</span><span class="token punctuation">:</span>\n    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Check out the repo\n      <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2\n    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Configure AWS Credentials\n      <span class="token key atrule">uses</span><span class="token punctuation">:</span> aws<span class="token punctuation">-</span>actions/configure<span class="token punctuation">-</span>aws<span class="token punctuation">-</span>credentials@v1\n      <span class="token key atrule">with</span><span class="token punctuation">:</span>\n        <span class="token key atrule">role-to-assume</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.AWS_ROLE_ARN_TO_USE<span class="token punctuation">}</span><span class="token punctuation">}</span>aws<span class="token punctuation">-</span><span class="token key atrule">region</span><span class="token punctuation">:</span> ca<span class="token punctuation">-</span>central<span class="token punctuation">-</span><span class="token number">1</span>\n    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Login to Amazon ECR\n      <span class="token key atrule">id</span><span class="token punctuation">:</span> login<span class="token punctuation">-</span>ecr\n      <span class="token key atrule">uses</span><span class="token punctuation">:</span> aws<span class="token punctuation">-</span>actions/amazon<span class="token punctuation">-</span>ecr<span class="token punctuation">-</span>login@v1\n    <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v2\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><ul><li>The above is a GitHub workflow. To make it use OIDC your need to add the permissions section before the jobs section</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">permissions</span><span class="token punctuation">:</span>\n  <span class="token key atrule">id-token</span><span class="token punctuation">:</span> write \n  <span class="token key atrule">contents</span><span class="token punctuation">:</span> read \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>The second addition to the workflow is to add the following step to each job that needs to authenticate to AWS</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">permissions</span><span class="token punctuation">:</span>\n<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Configure AWS Credentials\n  <span class="token key atrule">uses</span><span class="token punctuation">:</span> aws<span class="token punctuation">-</span>actions/configure<span class="token punctuation">-</span>aws<span class="token punctuation">-</span>credentials@v1\n  <span class="token key atrule">with</span><span class="token punctuation">:</span>\n    <span class="token key atrule">role-to-assume</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.AWS_ROLE_ARN_TO_USE<span class="token punctuation">}</span><span class="token punctuation">}</span>\n    <span class="token key atrule">aws-region</span><span class="token punctuation">:</span> ca<span class="token punctuation">-</span>central<span class="token punctuation">-</span><span class="token number">1</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>This step assign to GitHub the role which will be used when interacting with AWS. The <code>secrets.AWS_ROLE_ARN_TO_USE</code> invokes the <code>AWS_ROLE_ARN_TO_USE</code> GitHub secret. Its value is the arn for the role created in step 2.2 section m.(<code>arn:aws:iam::512345678906:role/testOIDCrole</code>)</li></ul>', 8);
function _sfc_render(_ctx, _cache) {
  return _hoisted_1;
}
var _03_Configuring_OIDC_in_GitHub_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { _03_Configuring_OIDC_in_GitHub_html as default };
