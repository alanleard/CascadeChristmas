#import "ApplicationMods.h"

@implementation ApplicationMods

+ (NSArray*) compiledMods
{
	NSMutableArray *modules = [NSMutableArray array];
	[modules addObject:[NSDictionary dictionaryWithObjectsAndKeys:@"paint",@"name",@"ti.paint",@"moduleid",@"1.0",@"version",@"43f13063-d426-4e9c-8a7a-72dc5e4aec57",@"guid",@"",@"licensekey",nil]];
	[modules addObject:[NSDictionary dictionaryWithObjectsAndKeys:@"box2d",@"name",@"ti.box2d",@"moduleid",@"0.1",@"version",@"906b17ce-2c91-471a-842c-3d6fba6d7d00",@"guid",@"",@"licensekey",nil]];
	return modules;
}

@end
