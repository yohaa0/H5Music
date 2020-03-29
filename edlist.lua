require "import"
import "android.widget.*"
import "android.view.*"

activity.setContentView(loadlayout("new"))
-- Toast.makeText(activity, item.Title,Toast.LENGTH_SHORT).show()
    --读文件
local file="/android_asset/h5/var.js"
--local file="/storage/emulated/0/AndroLua/project/H5Music/h5/var.js"

local str=io.open(file):read("*a")
io.close()
varjs.Text=str
-- Toast.makeText(activity, str,Toast.LENGTH_SHORT).show()

savevar.onClick=function()
  filesave()
end
function filesave()
  local filename="/android_asset/h5/var.js"
 -- local filename="/storage/emulated/0/AndroLua/project/H5Music/h5/var.js"
  
  
  -- 以附加的方式打开只写文件
   file = io.open(filename,"w+")

-- 在文件最后一行添加 Lua 注释
   file:write(varjs.Text)

-- 关闭打开的文件
   file:close()
  
  
end