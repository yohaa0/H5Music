require "import"
import "android.widget.*"
import "android.view.*"
import "android.app.*"
import "android.os.*"
import "layout"

activity.setContentView(layout)
activity.setTitle('H5音乐播放器')
activity.setTheme(android.R.style.Theme_DeviceDefault_Light)--设置md主题
import "android.graphics.drawable.ColorDrawable"
import "android.widget.PullingLayout$OnRefreshListener"
--沉浸状态栏----------------------------------------------------------------------------------------------------------------
if Build.VERSION.SDK_INT >= 23 then
  activity.getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);
  activity.getWindow().addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS).setStatusBarColor(0xff4285f4);
 elseif Build.VERSION.SDK_INT <= 23 then
  activity.getWindow().addFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
end

webSettings = myWebView.getSettings();

--支持JS(建议无论如何加上)
webSettings.setJavaScriptEnabled(true);

--支持中文，否则页面中中文显示乱码
webSettings.setDefaultTextEncodingName("UTF-8");

--无广告百度UA字符串
APP_NAME_UA="Mozilla/5.0 (Linux; Android 7.0; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/48.0.2564.116 Mobile Safari/537.36 T7/10.3 SearchCraft/2.6.2 (Baidu; P1 7.0)"

--自定义UA
webSettings.setUserAgentString(webSettings.getUserAgentString()..APP_NAME_UA);

--WebView设置字体大小:100表示正常,120表示文字放大1.2倍
webSettings.setTextZoom(100)

--myWebView.loadUrl("file:///android_asset/h5/index.html")--SearchViewEditText.Text)
myWebView.loadUrl("file:///storage/emulated/0/AndroLua/project/H5Music/h5/index.html")--SearchViewEditText.Text)


function onCreateOptionsMenu(menu)
  --menu：选项菜单。
  menu.add("打开")
  menu.add("添加")
  menu.add("退出")
end

function onOptionsItemSelected(item)
  --item：选中的菜单项
  if item.Title=="退出" then
    activity.finish()
   elseif item.Title=="打开" then
    --print(item.Title)
    activity.newActivity("edlist")
   elseif item.Title=="添加" then
    --print(item.Title)
    activity.newActivity("edlist")
   else
    -- print(item.Title)
    tol=activity.getLuaDir()
    print(tol)
    Toast.makeText(activity, tol,Toast.LENGTH_SHORT).show()

  end
end

--按两次返回键退出
参数=0
function onKeyDown(code,event)
  if string.find(tostring(event),"KEYCODE_BACK") ~= nil then
    if 参数+3 > tonumber(os.time()) then
      activity.finish()--SearchViewLayout.setVisibility(View.VISIBLE)
     elseif 参数+3 > tonumber(os.time()) then
      activity.finish()
     else
      layout={
        LinearLayout,
        layout_width="100%w";
        gravity="center";
        layout_height="fill";
        background="#FF5D6EFF";
        {
          TextView;
          gravity="center";
          text="请再按一下返回键退出";
          textColor="#ffffff";
          textSize=="15sp";
          layout_width="110%w";
          layout_height="40dp";
        };
      }
      布局=loadlayout(layout)
      local toast=Toast.makeText(activity,"提示",Toast.LENGTH_LONG).setView(布局).show().setGravity(Gravity.BOTTOM, 0, 0).show()
      .show()
      参数=tonumber(os.time())
    end
    return true
  end
end