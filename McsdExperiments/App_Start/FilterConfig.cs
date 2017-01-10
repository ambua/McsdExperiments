using McsdExperiments.Handlers;
using System.Web;
using System.Web.Mvc;

namespace McsdExperiments
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
            filters.Add(new MyFirstCustomFilter());
        }
    }
}
