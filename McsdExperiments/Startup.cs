using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(McsdExperiments.Startup))]
namespace McsdExperiments
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
