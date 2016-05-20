var searchIndex = {};
searchIndex["losetup"] = {"doc":"","items":[],"paths":[]};
searchIndex["loopdev"] = {"doc":"Setup and control loop devices.","items":[[3,"LoopControl","loopdev","Interface to the loop control device: `/dev/loop-control`.",null,null],[3,"LoopDevice","","Interface to a loop device ie `/dev/loop0`.",null,null],[11,"fmt","","",0,{"inputs":[{"name":"loopcontrol"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"open","","Opens the loop control device.",0,{"inputs":[],"output":{"name":"result"}}],[11,"next_free","","Finds and opens the next availble loop device.",0,{"inputs":[{"name":"loopcontrol"}],"output":{"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"loopdevice"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"open","","Opens a loop device.",1,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"attach","","Attach the loop device to a file starting at offset into the file.",1,{"inputs":[{"name":"loopdevice"},{"name":"str"},{"name":"u64"}],"output":{"name":"result"}}],[11,"get_path","","Get the path of the loop device.",1,{"inputs":[{"name":"loopdevice"}],"output":{"name":"option"}}],[11,"detach","","Detach a loop device from its backing file.",1,{"inputs":[{"name":"loopdevice"}],"output":{"name":"result"}}]],"paths":[[3,"LoopControl"],[3,"LoopDevice"]]};
initSearch(searchIndex);
